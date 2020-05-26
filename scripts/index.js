(function () {

    new p5(function (app) {

        var bgTrans, bg;

        var bl1, bl2, bl3;

        var dataB;

        var screen;
        var color;

        var font1;
        var font2;
        var counterBg;
        var op;
        var bgOp;
        var transOp;
        var startImg;

        var dia;



        app.setup = function () {

            op = 0;
            bgOp = 255;
            transOp = 0;

            dia = 0;


            fetch("./data/covid-19-5-10-2020.json").then(function (resp) {
                return resp.json();
            }).then(function (data) {
                dataB = data;
                console.log(dataB);

            });

            startImg = [
                app.loadImage('./resources/png/bg01.png'),
                app.loadImage('./resources/png/p01.png'),
                app.loadImage('./resources/png/p02.png'),
            ]

            var canvas = app.createCanvas(1920, 1080);
            canvas.parent('p5canvasParent');

            app.frameRate(30);

            font1 = app.loadFont('./resources/font/AnoRegular-UpperLower.otf');
            font2 = app.loadFont('./resources/font/AnoBold-Regular.otf');
            counterBg = app.loadImage('./resources/png/counter.png')
            app.textFont(font1);

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
                app.color('#f5d54a'),
                app.color('#357560'),
                app.color('#6cc9d3'),
                app.color('#d3321c'),
                app.color('#2e8b90'),
            ];

            const nums = Array(5).fill().map((_, index) => index);
            nums.sort(() => Math.random() - 0.5);

            bl1 = new Blob(app, app.random(80, app.windowWidth - 80), app.random(60, app.windowHeight - 60), 0, color[nums[0]]);
            bl2 = new Blob(app, app.random(80, app.windowWidth - 80), app.random(60, app.windowHeight - 60), 0, color[nums[1]]);
            bl3 = new Blob(app, app.random(80, app.windowWidth - 80), app.random(60, app.windowHeight - 60), 0, color[nums[2]]);



            screen = 1;

            console.log(nums);
        }

        app.draw = function () {



            switch (screen) {

                case 1:

                    op += .5;

                    app.background(bg);
                    app.imageMode(app.CENTER, app.CENTER);
                    app.tint(255, bgOp);
                    app.image(startImg[0], 1920 / 2, 1080 / 2, 1920 + 134 * app.noise(app.mouseY / 1584), 1080 + 201 * app.noise(app.mouseY / 1354), bgOp - 255);



                    app.textSize(150);

                    app.fill(50, 120, 130, op);
                    app.textAlign(app.CENTER, app.CENTER);
                    app.text('notitiaa', app.noise(app.mouseY / 1000) * 200 + 1400, app.noise(app.mouseX / 1000) * 100 + 500);

                    app.textSize(15);

                    app.fill(200, 120, 130, op / 1.5);
                    app.textAlign(app.CENTER, app.CENTER);
                    app.text('datos vivos del COVID-19 en Colombia', app.noise(app.mouseY / 900) * 200 + 1400, app.noise(app.mouseX / 900) * 100 + 500 - 100);

                    app.imageMode(app.CENTER, app.CENTER);
                    app.tint(255, 255 - bgOp * 1.1);
                    app.image(startImg[1], app.noise(app.mouseY / 1346) * 200 + 500, app.noise(app.mouseX / 1378) * 100 + 300);

                    app.imageMode(app.CENTER, app.CENTER);
                    app.tint(255, 255 - bgOp * 2);
                    app.image(startImg[2], app.noise(app.mouseY / 1879) * 200 + 500, app.noise(app.mouseX / 1348) * 100 + 450);


                    if (op > 100) {
                        if (bgOp !== 0) {
                            bgOp -= 5;
                        }



                        if (op > 210) {

                            screen++;

                        }


                    }



                    break;

                case 2:


                    app.background(bg);


                    bl1.draw();
                    bl1.sizePlus(4);

                    if (dia > 6) {
                        bl2.draw();
                        bl2.sizePlus(1);
                    }

                    if (dia > 15) {
                        bl3.draw();
                        bl3.sizePlus(.01);
                    }


                    if (app.frameCount % 90 === 0) {
                        dia += 1;
                    }


                    app.textSize(20);

                    app.textFont(font2);
                    app.noStroke();
                    app.fill(220, 220, 220);
                    app.textAlign(app.CENTER, app.CENTER);
                    app.imageMode(app.CENTER, app.CENTER);

                    app.image(
                        counterBg,
                        app.windowWidth * app.noise(app.mouseY / 1500),
                        app.windowHeight / 2 * app.noise(app.mouseX / 2300) + 250,
                        1920 / 3.5,
                        1080 / 3.5
                    );
                    app.text(
                        '0000' + dia,
                        app.windowWidth * app.noise(app.mouseY / 1500),
                        app.windowHeight / 2 * app.noise(app.mouseX / 2300) + 250 - 10,

                    );


            }

        }


    });


})()