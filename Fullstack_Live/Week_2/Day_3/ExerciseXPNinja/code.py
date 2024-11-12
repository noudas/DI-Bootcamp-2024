def exercise_1():
    # Write a base class called Temperature.
    # Implement the following subclasses: Celsius, Kelvin, Fahrenheit.
    # Each of the subclasses should have a method which can convert the temperture to another type.
    # You must consider different designs and pick the best one according to the SOLID Principle.
    class Temperature:
        def __init__(self, temperature):
            self.temperature = temperature

        def to_celsius(self):
            raise NotImplementedError("To be constructed.")
        
        def to_kelvin(self):
            raise NotImplementedError("To be constructed.")
        
        def to_fahrenheit(self):
            raise NotImplementedError("To be constructed.")

    class Celsius(Temperature):
        def __init__(self, temperature):
            super().__init__(temperature)

        def to_celsius(self):
            return self.temperature
        
        def to_fahrenheit(self):
            return (self.temperature * 9/5) + 32
        
        def to_kelvin(self):
            return self.temperature + 273.15

    class Kelvin(Temperature):
        def __init__(self, temperature):
            super().__init__(temperature)
        
        def to_celsius(self):
            return self.temperature - 273.15

        def to_kelvin(self):
            return self.temperature
    
        def to_fahrenheit(self):
            return (self.temperature - 273.15) * 9/5 + 32

    class Fahrenheit(Temperature):
        def __init__(self, temperature):
            super().__init__(temperature)

        def to_celsius(self):
            return (self.temperature - 32) * 5/9
        
        def to_fahrenheit(self):
            return self.temperature
        
        def to_kelvin(self):
            return self.to_celsius() + 273.15
    
def exercise_2():
    # Write a class called QuantumParticle and implement the following:
    # The attributes - The particle has an initial position (x), momentum (y) and spin (p)
    import random
    class QuantumParticle:
        def __init__(self,x=0,y=0,p=0):
            self.x = x
            self.y = y
            self.p = p
        
    # The method position() - Position measurement: generate a random position (integer between 1 and 10,000)
        def position(self):
            self.x = random.randrange(1,10000)
            return self.x
    
    # The method momentum() - Momentum measurement: generate a random momentum (float - a number between 0 and 1)
        def momentum(self):
            self.y = random.uniform(0.0,1.0)
            return self.y
    # 
    # The method spin() - Spin measurement: can randomly be 1/2 or -1/2
        def spin(self):
            self.p = random.choice([0.5, -0.5])
            return self.p
    # 
    # Create a method that implements a disturbance. A disturbance occurs each time a measurement is made (e.g. one of the measurements method is called). 
    # Disturbance changes the position and the momentum of the particle (randomly generated) and then prints ‘Quantum Interferences!!’

        def disturbance(self):
            self.x = self.position()
            self.y = self.momentum()
            print("Quantum Interferences!!")
            return self
        
        def measurement(self):
            self.disturbance()
            print(self.__repr__())
        
        def entangle(self, particle):
            if isinstance(particle, QuantumParticle):
                particle.p = -self.p
                print("Spooky Action at a Distance !!")
            else:
                print("The particles cannot be entangled!")
            return particle

        
        def __repr__(self):
            return f"Particle is in the position {self.x} with the momentum of {self.y} in the spin {self.p}"
    # 
    # Implement a meaningful representation of the particle (repr)
    # 
    # Quantum Entanglement: two particle can be entangled, meaning that if I measure the spin of one of them the second one is automatically 
    # set to the opposite value. A quantum particle can only be entangled to another quantum particle (check that when you run the method !!)
    # Modify as you see fit the attributes and methods of your class to fit the previous definition
    # When two particles are entangled print: ‘Spooky Action at a Distance !!’
    p1 = QuantumParticle(x=1, p=0.5)
    print(p1)
    p1.measurement()

    p2 = QuantumParticle(x=2, p=0.5)
    print(p2)
    p1.entangle(p2)

    # Verify entanglement
    print(p1)
    print(p2)

    # Create new particles and entangle them
    p1 = QuantumParticle()
    p2 = QuantumParticle()
    p1.entangle(p2)
    print(p1)
    print(p2)


#exercise_1()
#exercise_2()