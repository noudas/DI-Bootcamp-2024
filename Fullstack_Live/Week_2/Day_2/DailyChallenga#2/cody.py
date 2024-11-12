# This challenge is about Biology that will put emphasis on your knowledge of classes, inheritance and polymorphism.
import random
# Build a DNA object. DNA is composed of chromosomes which is itself composed of Genes.
# A Gene is a single value 0 or 1, it can mutate (flip).
class Gene:
    def __init__(self, value=False):
        self.value = value

    def mutate(self):
        self.value = not self.value

# A Chromosome is a series of 10 Genes. 
# It also can mutate, meaning a random number of genes can randomly flip (1/2 chance to flip).
class Chromosome(Gene):
    def __init__(self,length = 10):
        self.genes = [Gene(random.choice([True,False])) for _ in range(length)]

    def mutate(self):
        for gene in self.genes:
            if random.random() < 0.5:
                gene.mutate()

    def __str__(self):
        gene_string = ''
        for gene in self.genes:
            gene_string += ' ' + str(gene.value)
        return gene_string


    

chromo_1 = Chromosome()
print(chromo_1.__str__())
# A DNA is a series of 10 chromosomes, and it can also mutate the same way Chromosomes can mutate.

class DNA(Chromosome):
    def __init__(self, length=10):
        super().__init__(length)
        self.chromosomes = [Chromosome() for _ in range(length)]

    def mutate(self):
        for chromo in self.chromosomes:
            if random.random() < 0.5:
                chromo.mutate()

    def __str__(self):
        return '\n'.join(str(chromo) for chromo in self.chromosomes)

# Create a new class called Organism that accepts a DNA object and an environment parameter that sets the probability for its DNA to mutate.

class Organism:
    def __init__(self, dna, environment=0.5):
        self.dna = dna
        self.environment = environment

    def mutate(self):
        if random.random() < self.environment:
            self.dna.mutate()

    def is_perfect(self):
        return all(gene.value for chromo in self.dna.chromosomes for gene in chromo.genes)
    
generations = 0
organism = Organism(DNA())

while not organism.is_perfect():
    organism.mutate()
    generations += 1

print(f"Reached a perfect DNA after {generations} generations!")
print(organism.dna)



# Instantiate a number of Organism and let them mutate until one gets to a DNA which is only made of 1s. Then stop and record the number of generations (iterations) it took.
# Write your results in you personal biology research notebook and tell us your conclusion :).