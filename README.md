# Daniel Cherutti · Site Pessoal

Site pessoal moderno (2026) com visual **geek / cyberpunk**: glassmorphism, neon e tema escuro. Pronto para GitHub Pages.

## 🚀 Publicar no GitHub Pages

1. **Crie um repositório** no GitHub (ex: `Meu-WebSite` ou `danielcherutti.github.io`).

2. **Envie os arquivos** deste projeto:
   ```bash
   git init
   git add index.html styles.css script.js README.md
   git commit -m "Site pessoal 2026"
   git branch -M main
   git remote add origin https://github.com/SEU-USUARIO/SEU-REPO.git
   git push -u origin main
   ```

3. **Ative o GitHub Pages**:
   - Repositório → **Settings** → **Pages**
   - Em **Source** escolha **Deploy from a branch**
   - Branch: **main** (ou master), pasta: **/ (root)**
   - Salve.

4. Seu site ficará em:
   - `https://SEU-USUARIO.github.io/SEU-REPO/`
   - Ou, se o repo for `usuario.github.io`: `https://usuario.github.io/`

## 📁 Estrutura

- `index.html` — Página única com hero, sobre, stack, contato e stats
- `styles.css` — Glassmorphism, neon, grid animado, responsivo
- `script.js` — Efeito de digitação, menu mobile, scroll reveal

## ✏️ Personalizar

- **Links**: edite em `index.html` os links do LinkedIn, Twitter e Instagram (substitua `seu-perfil` e `seu-usuario`).
- **Cores**: em `styles.css`, variáveis `--accent`, `--accent-cyan`, `--accent-pink`.
- **Textos do typing**: no hero, o atributo `data-words` em `.typing` controla as frases que rotacionam.

## 🛠 Tech

HTML5, CSS3 (custom properties, grid, backdrop-filter), JavaScript vanilla. Sem dependências; funciona em qualquer host estático.

---

© Daniel Cherutti · Dev & Infra — *code, VMs, and everything in between*
