import { Controllers } from "./Controllers";
import { Menu } from "./scenes/Menu";
import { Map } from "./scenes/Map";

export class GameEngine {
    canvas;
    context;

    map;
    menu;

    controls;

    gameRunning = false;

    currentScene = 'menu';

    constructor(canvas, context) {
        // set event listeners for global window
        // ESC -> to run menu screen

        this.canvas = canvas;
        this.context = context;

        this.controls = new Controllers();
        
        this.menu = new Menu(canvas, context, this);
        this.map = new Map(canvas, context, this);
    }

    changeScene(scene) {
        if (scene === 'map') {
            this.gameRunning = true;

            this.currentScene = 'map';

            // this.game = new Game();

            // this.game.init(
            //     this.canvas, 
            //     this.context,
            // );
        }

        if (scene === 'pause-menu') {
            this.gameRunning = true;

            this.currentScene = 'menu';
        }
    }

    update() {
        if (this.controls.exit && this.currentScene !== 'menu') {
            console.log('should open menu')

            this.changeScene('pause-menu')
        }
    }

    run() {
        if (this.currentScene === 'map' && this.controls) {
            this.map.run(this.controls);
            return;
        }

        else if (this.currentScene === 'menu') {
            this.menu.run();
            return;
        }
    }

}