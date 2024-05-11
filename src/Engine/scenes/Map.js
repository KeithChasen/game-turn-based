import { Scene } from "./Scene";

export class Map extends Scene {
    run() {
        if (!this.ctx) return;

        const cnvW = this.cnv.width;
        const cnvH = this.cnv.height;
        
        this.ctx.beginPath();
        this.ctx.rect(
            cnvW / 4,
            cnvH / 4,
            cnvW / 2,
            cnvH / 2,
        );
        this.ctx.fillStyle = 'black';
        this.ctx.fill();

        this.ctx.font = "30px Arial";
        this.ctx.fillStyle = 'white';
        this.ctx.fillText('MAP', cnvW / 4 + 10, cnvH / 4 + 50);
    }
}