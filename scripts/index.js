(function () {

    new p5(function (app) {

        var ver1, ver2, ver3, az, roj, am, bg;

        var bl1;

        var pts = [
            app.createVector(50, 50),
            app.createVector(100, 300),
            app.createVector(300, 300),
            app.createVector(350, 50),
        ];

        app.setup = function () {

            var canvas = app.createCanvas(app.windowWidth, app.windowHeight);
            canvas.parent('p5canvasParent');


            bg = app.color('#eafbe1');
            ver1 = app.color('#76a459');
            ver2 = app.color('#255127');
            ver3 = app.color('#5a937e');
            az = app.color('#5b7dc5');
            roj = app.color('#d43a2a');
            am = app.color('#efc94a');

            bl1 = new Blob(app, 500, 500, 300, az);


        }

        app.draw = function () {
            app.background(bg);

            bl1.draw();


        }


    });


})()