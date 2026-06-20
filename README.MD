# F1 Mini API

API REST simples (Fastify + TypeScript) que lista equipes e pilotos de F1.

> **Nota:** o **código é 100% humano**. Este README foi **gerado por IA**, mas revisado por mim.

## Sobre

Projeto feito como requisito para finzalização do bootcamp Sem Parar Corpay - Back-end do Zero a Prática.
Baseado em uma aula da DIO, onde tudo ficava num único arquivo `server`.
A ideia do projeto era de ser uma minimal API, eu melhorei modularizando melhor a API.

### Melhorias em relação ao original

- **Separação em arquivos** — controllers, dados (mock) e tipos cada um no seu lugar, em vez de tudo no `server`.
- **Mais modular** — cada recurso (`drivers`, `teams`) tem seu próprio controller, registrado no servidor.
- **Tipagem** — tipos centralizados em `src/types`.
- **Tratamento de erros** — inicialização do servidor com `try/catch` para não silenciar exceções.

## Estrutura

```
src/
├── controller/   # rotas (drivers, teams)
├── data/         # dados mock
├── types/        # tipos compartilhados
└── server.ts     # inicialização do Fastify
```

## Rotas

- `GET /teams` — lista as equipes
- `GET /drivers` — lista os pilotos
- `GET /drivers/:id` — busca um piloto por id

## Como rodar

```bash
npm install
npm run dev
```

Servidor em `http://localhost:3333`.

### Scripts (Escrito por mim, pessoalmente)

- `npm run dev` — modo desenvolvimento com watch
- `npm run dist` — compila com tsup

Deixei só esses dois, pois, acredito que não vou precisar dos outros.
Alterei a nomenclatura também para ser mais padronizado
