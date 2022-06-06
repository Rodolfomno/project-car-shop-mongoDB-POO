import express, { Router } from 'express';
import connectToDatabase from './connection';
import errorHandler from './middleware/errorHandler';
import carsRouter from './routes';

class App {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.app.use(express.json());
    this.routes();
    this.app.use(errorHandler);
  }

  public startServer(PORT: string | number = 3001): void {
    connectToDatabase();
    this.app.listen(
      PORT,
      () => console.log(`Server running here 👉 http://localhost:${PORT}`),
    );
  }

  private routes() {
    this.app.use('/cars', carsRouter);
  }

  public addRouter(router: Router) {
    this.app.use(router);
  }

  public getApp() {
    return this.app;
  }
}

export default App;

export const { app } = new App();
