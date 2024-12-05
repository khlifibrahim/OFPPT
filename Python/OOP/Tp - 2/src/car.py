class Car :
    def __init__(self, brand='Ferrari', color='red'):
        self.brand = brand
        self.color = color
        self.driver = ''
        self.speed = 0

    def chooseDriver(self, name):
        self.driver = name

    def accelerate(self, rate, duration):
        if self.driver == '':
            print('No designated driver?')
        else:
            speedGain = rate * duration
            self.speed += speedGain

    def description(self): 
        print(f"Brand: {self.brand}")
        print(f"Color: {self.color}")
        print(f"Driver: {self.driver}")
        print(f"Speed: {self.speed} m/s")

class DieselCar(car):
    def __init__(self, brand='Ferrari', color='red'):
        super().__init__(brand, color)
        self.engine = 'diesel'

    # def accelerate(self, rate, duration):
