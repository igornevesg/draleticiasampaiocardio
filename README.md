# Site Cardiologista - Next + React + TypeScript

Projeto institucional da Dra. Letícia Sampaio, cardiologista CRM 73994, inspirado na referência enviada, com melhorias em cards, formulário de contato sem CNPJ e iframe do Google Maps.

## Como rodar

```bash
npm install
npm run dev
```

Depois acesse `http://localhost:3000`.

## Onde trocar as imagens

As imagens locais ficam em:

```txt
/public/images/
```

Substitua:

- `doctor-placeholder.svg` pela foto principal da médica na hero.
- `clinic-placeholder.webp` por uma foto da clínica, consultório ou médica.
- `logo.svg` pela logo real da cliente.

## Onde trocar o mapa

No arquivo:

```txt
src/app/page.tsx
```

Procure por:

```tsx
src="https://www.google.com/maps?q=Montes%20Claros%20MG&output=embed"
```

Troque pelo iframe/endereço real do Google Maps da clínica.

## Campos do formulário

O formulário foi adaptado para cardiologista e não pede CNPJ. Campos atuais:

- Nome completo
- Telefone / WhatsApp
- E-mail
- Motivo do contato
- Mensagem

## Observação

O botão do formulário está como `type="button"` para evitar envio falso. Depois você pode integrar com WhatsApp, FormSubmit, Resend, API Route do Next ou outro backend.


## Identidade aplicada

- Vermelho principal: `#AE3335`
- Dourado de apoio: `#D1AE6C`
- WhatsApp: `(38) 99822-0202`
- Endereço: Av. Cel. Prates, 376, Edifício Plazza Center, sala 505, Centro, Montes Claros/MG.
# draleticiasampaiocardio
