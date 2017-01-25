require_relative 'caesar_cipher'

p caesar_cipher("Boy! What a string!", -5) == "Wjt! Rcvo v nomdib!"
p caesar_cipher("Hello zach168! Yes here.", 5) == "Mjqqt efhm168! Djx mjwj."
p caesar_cipher("Hello Zach168! Yes here.", -5) == "Czggj Uvxc168! Tzn czmz."
