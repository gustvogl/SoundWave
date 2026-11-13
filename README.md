# 🎙️ SoundWave Pro — Podcasts Acadêmicos

Aplicativo mobile nativo Android desenvolvido para a disciplina **PPDM2 (Aula 16 - Personalização Nativa)**, focado em streaming e curadoria de podcasts científicos e universitários.

## ✨ Funcionalidades
- **Catálogo Acadêmico & Busca:** Filtro por áreas do conhecimento (Computação, IA & Dados, Pesquisa, Física) e busca instantânea por docentes, instituições ou temas.
- **Player Completo & Mini-Player Flutuante:** Barra de progresso interativa, controle de velocidade (`1x`, `1.25x`, `1.5x`, `2x`), modal expandido com *Abstract* (resumo científico) e síntese sonora via Web Audio API.
- **Biblioteca Pessoal:** Favoritar e gerenciar episódios salvos na aba Biblioteca.
- **Identidade Visual Nativa:** Ícone adaptativo (`1024x1024`) e Splash Screen (`2732x2732`) gerados via `@capacitor/assets`.
- **CI/CD Automatizado:** Compilação automática do artefato `meu-aplicativo-apk` via GitHub Actions.

## 🚀 Como Executar
```bash
npm install
npm run build
npx cap add android
npx capacitor-assets generate --android
npx cap sync android
```
