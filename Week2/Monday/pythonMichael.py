class Car: 
    def __init__(self,make,model,color):
        self.model = model
        self.make = make
        self.color = color

    def changeColor(self, newColor):
        print('Changing from {} to {}'.format(self.color, newColor))
        self.color = newColor

    def startCar(self):
        print('Starting the gas car')

    

class ElectricCar(Car):
    def __init__(self, make, model, color,range, autopilot):
        super().__init__(make,model,color)
        self.range = range
        self.autopilot= autopilot

    # def startCar(self):
    #     print('Starting the electric car')




# michael = Car('Mazda', 'CX-5', 'Grey')
# sam = Car('Toyota','Tachoma','Blue')
# travis = Car('GMC', "H3",'Red')

# michael.changeColor('purple')
# print(michael.color)
#michael = Car('Mazda', 'CX-5', 'Grey')
keith = ElectricCar("Tesla", "Model 3", "Black", 300, True)
# 


michael.startCar()
keith.startCar()