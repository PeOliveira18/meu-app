# meu-app

App mobile de cadastro de usuários feito com React Native + Expo.

## Tecnologias

- React Native 0.83
- Expo ~55
- TypeScript

## Como rodar

```bash
npm install
npm start        # Expo DevTools
npm run android  # Android
npm run ios      # iOS
```

## Estrutura

```
src/
├── components/
│   ├── ButtonLog/   # Botão estilizado (vermelho)
│   └── Input/       # Campo de texto com label
└── screens/
    └── RegisterScreen/  # Tela de criação de conta
```

## Componentes

### `Input`
Campo de texto com label em caixa alta. Aceita todas as props do `TextInput` do React Native, mais a prop `name` (label exibida acima do campo).

### `ButtonLog`
Botão de ação principal. Props: `textButton` (texto) e `onPress` (callback opcional).

### `RegisterScreen`
Tela de cadastro com os campos: Nome, Sobrenome, Email, Senha e Confirmar Senha.
