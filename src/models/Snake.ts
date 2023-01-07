class Snake {
  constructor(element: HTMLDivElement) {
    this.element = element;
  }
  private element: HTMLDivElement;
  private posX: number = 390;
  private posY: number = 390;
  private speed: number = 2;
  private framerate: number = 60;
  private currentIntervalId: NodeJS.Timer | undefined;

  public setNewInterval(intervalId: NodeJS.Timer) {
    if (this.currentIntervalId) {
      clearInterval(this.currentIntervalId);
    }
    this.currentIntervalId = intervalId;
  }

  public runTop() {
    const interval = setInterval(() => {
      this.posY -= this.speed;
      this.element.style.top = `${this.posY}px`;
    }, 1000 / this.framerate);
    this.setNewInterval(interval);
  }

  public runRight() {
    const interval = setInterval(() => {
      this.posX += this.speed;
      this.element.style.left = `${this.posX}px`;
    }, 1000 / this.framerate);
    this.setNewInterval(interval);
  }

  public runBottom() {
    const interval = setInterval(() => {
      this.posY += this.speed;
      this.element.style.top = `${this.posY}px`;
    }, 1000 / this.framerate);
    this.setNewInterval(interval);
  }

  public runLeft() {
    const interval = setInterval(() => {
      this.posX -= this.speed;
      this.element.style.left = `${this.posX}px`;
    }, 1000 / this.framerate);
    this.setNewInterval(interval);
  }
}

export default Snake;
