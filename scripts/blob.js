class Blob {

    constructor(app, x, y, size, color) {
        this.app = app;
        this.pos = app.createVector(x, y);
        this.size = size;
        this.color = color;

    }

    draw() {

        var {
            app,
            pos,
            size,
            color
        } = this;

        var h1 = app.createVector(0, size * -.75);
        h1.rotate(app.PI * app.frameCount / 100);
        h1.add(pos);
        h1.add(size * -.5, 0);

        app.fill(0);
        app.ellipse(h1.x, h1.y, 50);


        var pts = [
            app.createVector(pos.x - size / 2, pos.y), // pt izq ab
            app.createVector(pos.x - size / 2, pos.y + size * .75), // manija izq ab
            app.createVector(pos.x + size / 2, pos.y + size * .75), // manija der ab
            app.createVector(pos.x + size / 2, pos.y), // pt der ab

            app.createVector(pos.x - size / 2, pos.y - size * .75), // manija izq arr
            app.createVector(pos.x + size / 2, pos.y - size * .75), // manija der arr
        ];

        app.fill(this.color);
        app.stroke(0);
        app.strokeWeight(4);
        app.bezier(
            pts[0].x, pts[0].y,
            pts[1].x, pts[1].y,
            pts[2].x, pts[2].y,
            pts[3].x, pts[3].y,
        );

        app.bezier(
            pts[0].x, pts[0].y,
            pts[4].x, pts[4].y,
            pts[5].x, pts[5].y,
            pts[3].x, pts[3].y,

        );
        app.noStroke();
        app.fill(255);
        for (let pt of pts) {
            app.ellipse(pt.x, pt.y, 20, 20);
        }
    }

    move() {

        this.pos.set(mx, my);
    }
}