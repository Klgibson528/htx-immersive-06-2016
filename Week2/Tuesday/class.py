class Character :
    def __init__(self, power, health):
        self.power = power
        self.health = health
        self.myName = "Veroncica"
        print(self.power, self.health)
        print(self.myName)


class Hero(Character) :
    def __init__(self, power1, health1, myName):
        super().__init__(power1, health1)
        self.whoAmI = "hero"
        self.myName = myName
        print(self.whoAmI)
        print(self.myName)

    def testDataTypes(self, myList):
        print(myList)
        myList[0] = 99
        myList[1] = 33
        print(myList)
        # print(goblin.power, goblin.health)
        # goblin.power = 100
        # goblin.health = 34
        # print(goblin.power, goblin.health)

class Goblin(Character):
    def __init__(self, power1, health1):
        super().__init__(power1, health1)
        self.whoAmI = "goblin"
        print(self.whoAmI)


matt = Hero(10, 4, "matt")
travis = Hero(23, 2, "travis")

# matt = Hero(10, 4)
# myVariable = "Fisher"
# myList = [1, 2, 3, 4]
# veronica = Goblin(4, 5)
# matt.testDataTypes(myList)
# print(myList)

# print(veronica.health)
# print(veronica.power)