# meu-app
<img width="1206" height="2622" alt="simulator_screenshot_6A882F5A-8485-40BD-863A-B8BDA19A88B8" src="https://github.com/user-attachments/assets/0850c603-6753-4d19-bf05-8bc88a3efa3d" />
## Integrantes
- Pedro Oliveira - 99943
- Diego Cabral - 557817
- João Boht - 558690

## Objetivo

Permitir que novos usuários criem uma conta informando nome, sobrenome, email e senha. O projeto serve como base para fluxos de autenticação em apps mobile.

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
Botão de ação principal. Props: `textButton` (texto).

### `RegisterScreen`
Tela de cadastro com os campos: Nome, Sobrenome, Email, Senha e Confirmar Senha.
