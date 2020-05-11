(function () {

    new p5(function (app) {

        var ver1, ver2, ver3, az, roj, am, bg;

        var bl;
        var dataB;

        var color;


        app.setup = function () {

            fetch("./data/covid-19-5-10-2020.json").then(function (resp) {
                return resp.json();
            }).then(function (data) {
                dataB = data;
                console.log(dataB);

            });

            var canvas = app.createCanvas(app.windowWidth, app.windowHeight);
            canvas.parent('p5canvasParent');


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
                new Blob(app, app.random(0, app.windowWidth), app.random(0, app.windowHeight), parseInt(app.random(200, 1000)), color[parseInt(app.random(0, color.length))]),
                new Blob(app, app.random(0, app.windowWidth), app.random(0, app.windowHeight), parseInt(app.random(200, 1000)), color[parseInt(app.random(0, color.length))]),
                new Blob(app, app.random(0, app.windowWidth), app.random(0, app.windowHeight), parseInt(app.random(200, 1000)), color[parseInt(app.random(0, color.length))]),
                new Blob(app, app.random(0, app.windowWidth), app.random(0, app.windowHeight), parseInt(app.random(200, 1000)), color[parseInt(app.random(0, color.length))]),
                new Blob(app, app.random(0, app.windowWidth), app.random(0, app.windowHeight), parseInt(app.random(200, 1000)), color[parseInt(app.random(0, color.length))]),
            ];

            console.log(parseInt(app.random(0, color.length)));
        }

        app.draw = function () {


            app.background(bg);

            for (let i = 0; i < bl.length; i++) {
                bl[i].draw();
            }



        }


    });


})()