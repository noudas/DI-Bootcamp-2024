# Escreva uma funcao que receba separadores string, externo > interno e faz o mapa da string
def separadores_string(string,separador):
    pass

# Escreva uma funcao que receba mapa da string, separador interno > externo e devolve a string
def mapa_to_string(mapa,separador):
    pass


string = 'C1=V1;C2=V2;C3=V3;'

dicio = {par.split('=')[0]: par.split('=')[1] for par in string.strip(';').split(';')}
print(dicio)

string = ';'.join([f"{key}={value}" for key,value in dicio.items()]) + ';'
print(string)