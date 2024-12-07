class PainelDeJogos:
    def __init__(self):
        self.jogos = []

    def adicionar_jogo(self, nome, genero):
        """
        Adiciona um novo jogo à lista.
        :param nome: Nome do jogo
        :param genero: Gênero do jogo
        """
        jogo = {
            'nome': nome,
            'genero': genero,
            'jogado': False
        }
        self.jogos.append(jogo)
        print(f"Jogo '{nome}' adicionado com sucesso!")

    def exibir_jogos(self):
        """
        Exibe todos os jogos da lista.
        """
        if not self.jogos:
            print("Nenhum jogo na lista.")
            return
        print("Jogos Disponíveis:")
        for index, jogo in enumerate(self.jogos, start=1):
            status = "Jogado" if jogo['jogado'] else "Não jogado"
            print(f"{index}. {jogo['nome']} ({jogo['genero']}) - {status}")

    def marcar_como_jogado(self, index):
        """
        Marca um jogo como jogado.
