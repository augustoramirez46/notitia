(function () {

    new p5(function (app) {

        var ver1, ver2, ver3, az, roj, am, bg;

        var bl;
        var dataB;

        var screen;
        var color;

        var font;
        var op;

        var dia;



        app.setup = function () {

            op = 0;

            dia = 0;


            fetch("./data/covid-19-5-10-2020.json").then(function (resp) {
                return resp.json();
            }).then(function (data) {
                dataB = data;
                console.log(dataB);

            });

            var canvas = app.createCanvas(app.windowWidth, app.windowHeight);
            canvas.parent('p5canvasParent');

            app.frameRate(30);

            font = app.loadFont('./resources/font/AbrilFatface-Regular.ttf');
            app.textFont(font);

            bg = app.color('#eafbe1');
            /*
            ver1 = app.color('#76a459');
            ver2 = app.color('#255127');
            ver3 = app.color('#5a937e');
            az = app.color('#5b7dc5');
            roj = app.color('#d43a2a');
            am = app.color('#efc94a');
            */

            color = [
                app.color('#76a459'),
                app.color('#255127'),
                app.color('#5a937e'),
                app.color('#5b7dc5'),
                app.color('#d43a2a'),
                app.color('#efc94a'),
            ];
            bl = [
                /*  new Blob(app, app.random(0, app.windowWidth), app.random(0, app.windowHeight), parseInt(app.random(200, 1000)), color[parseInt(app.random(0, color.length))]),
                  new Blob(app, app.random(0, app.windowWidth), app.random(0, app.windowHeight), parseInt(app.random(200, 1000)), color[parseInt(app.random(0, color.length))]),
                  new Blob(app, app.random(0, app.windowWidth), app.random(0, app.windowHeight), parseInt(app.random(200, 1000)), color[parseInt(app.random(0, color.length))]),
                  new Blob(app, app.random(0, app.windowWidth), app.random(0, app.windowHeight), parseInt(app.random(200, 1000)), color[parseInt(app.random(0, color.length))]),
                  */
                new Blob(app, app.random(0, app.windowWidth), app.random(0, app.windowHeight), 0, color[parseInt(app.random(0, color.length))]),
            ];

            screen = 1;

            console.log(parseInt(app.random(0, color.length)));
        }

        app.draw = function () {



            switch (screen) {

                case 1:
                    op += .3;

                    app.background(bg);
                    app.textSize(400);

                    app.fill(50, 120, 130, op);
                    app.textAlign(app.CENTER, app.CENTER);
                    app.text('notitia', app.windowWidth * app.noise(app.mouseY / 1000), app.windowHeight / 2 * app.noise(app.mouseX / 2000));

                    app.textSize(50);

                    app.fill(200, 120, 130, op / 1.5);
                    app.textAlign(app.CENTER, app.CENTER);
                    app.text('datos vivos del COVID-19 en Colombia', app.windowWidth * app.noise(app.mouseY / 1500), app.windowHeight / 2 * app.noise(app.mouseX / 2300) + 250);
                    if (app.keyIsPressed === true) {
                        screen++;

                    }

                    break;

                case 2:

                    app.background(bg);
                    app.textSize(90);

                    app.noStroke();
                    app.fill(200, 120, 130, 50);
                    app.textAlign(app.CENTER, app.CENTER);
                    app.text('día: ' + dia, app.windowWidth * app.noise(app.mouseY / 1500), app.windowHeight / 2 * app.noise(app.mouseX / 2300) + 250);

                    for (let i = 0; i < bl.length; i++) {
                        bl[i].draw();
                        bl[i].sizePlus();
                    }

                    if (app.frameCount % 120 === 0) {
                        dia += 1;
                    }

                    break;


            }

        }


    });


})()