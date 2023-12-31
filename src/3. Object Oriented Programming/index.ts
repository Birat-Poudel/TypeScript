class Ride {

    private static _activeRides: number = 0;

    public static get activeRides(): number {
        return Ride._activeRides
    }

    public start(): void {
        Ride._activeRides++;
    }

    public stop(): void {
        Ride._activeRides--;
    }

}

let ride1: Ride = new Ride();
ride1.start();

let ride2: Ride = new Ride();
ride2.start();

console.log(Ride.activeRides);