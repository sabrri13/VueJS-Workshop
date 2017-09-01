import { Vue } from 'vue-property-decorator';
import { router } from './app.router';
import { AppComponent } from './app.component';
import { CitiesSeed } from './core/seeds';

export class App {
    constructor() {
        this.bootstrap();
    }

    private async seed(): Promise<void> {
        await new CitiesSeed().initialize();
    }

    private async bootstrap(): Promise<Vue> {
        await this.seed();

        let options = {
            el: '.main',
            router: router(),
            render: create => create(AppComponent)
        };

        return new Vue(options);
    }
}

new App();