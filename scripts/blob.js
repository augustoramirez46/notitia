class Blob {

    constructor(app, x, y, size, color) {
        this.app = app;
        this.pos = app.createVector(x, y);
        this.size = size;
        this.color = color;

        this.leftOffs = 415;
        this.rightOffs = 1654;
    }

    draw() {

        var {
            app,
            pos,
            size,
            color,
            leftOffs
        } = this;

        // izq 
        this.leftOffs += 0.01;
        var left = this.getSideVars(this.leftOffs, -.5);

        // der
        this.rightOffs += 0.01;
        var right = this.getSideVars(this.rightOffs, .5);

        app.fill(this.color);
        app.stroke(this.color);
        /*
        app.strokeWeight(app.noise(rotLeft) * app.random(1, 15));
         */

        // mitad abajo
        app.bezier(
            left.center.x, left.center.y,
            left.bottom.x, left.bottom.y,
            right.bottom.x, right.bottom.y,
            right.center.x, right.center.y,
        );

        left.center.y++;
        left.top.y++;
        right.center.y++;
        right.top.y++;

        // mitad arriba
        app.bezier(
            left.center.x, left.center.y,
            left.top.x, left.top.y,
            right.top.x, right.top.y,
            right.center.x, right.center.y,

        );

    }

    getSideVars(offset, mov) {

        var {
            app,
            pos,
            size,
            color,
            leftOffs
        } = this;

        var rot = app.noise(offset) * app.PI / 4 - app.PI / 8;

        // var leftDeltaRot = app.random(-.2, .27);



        var bottom = app.createVector(0, size * .5 + app.noise(offset + 123483) * 100);
        bottom.rotate(rot);
        bottom.add(pos);
        bottom.add(size * mov, 0);

        var top = app.createVector(0, size * .5 + app.noise(offset + 123483) * 100);
        top.rotate(rot + app.PI);
        top.add(pos);
        top.add(size * mov, 0);

        var posMov = 30;
        var center = app.createVector(pos.x - size * mov * -1, pos.y);

        center.add(
            app.noise(offset + 1649) * posMov - posMov / 2,
            app.noise(offset + 16546) * posMov - posMov / 2,
        );


        return {
            top: top,
            center: center,
            bottom: bottom,
        }

    }

    move() {

        this.pos.set(mx, my);
    }
}