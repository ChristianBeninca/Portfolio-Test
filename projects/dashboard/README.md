# 🚀 Dashboard Pessoal - New Tab

Um dashboard moderno e personalizável para substituir a página inicial do seu navegador. Organize seus sites favoritos em colunas estilo Trello, com design glassmorphism e funcionalidades avançadas.

![Dashboard Preview](https://via.placeholder.com/800x400/667eea/ffffff?text=Dashboard+Preview)

## ✨ Características

- 🎨 **Design Moderno**: Interface glassmorphism com efeitos blur e animações suaves
- 📱 **Totalmente Responsivo**: Funciona perfeitamente em desktop, tablet e mobile
- 🗂️ **Organização Estilo Trello**: Dashboards em colunas horizontais com scroll
- 💾 **Armazenamento Local**: Todos os dados salvos no navegador (localStorage)
- 🔍 **Pesquisa Integrada**: Barra de pesquisa conectada ao Google
- 🌤️ **Widget de Clima**: Informações meteorológicas (simuladas)
- ⏰ **Data/Hora Dinâmica**: Atualização automática da data e hora
- ⚡ **Atalhos de Teclado**: Navegação rápida e eficiente
- 🎭 **Ícones Personalizáveis**: Use emojis como ícones dos sites

## 🚀 Instalação e Configuração

### Método 1: Arquivo Local
1. **Baixe o arquivo HTML** ou copie o código
2. **Salve como `dashboard.html`** em uma pasta de sua escolha
3. **Configure no navegador**:
   - Instale a extensão "Custom New Tab URL"
   - Configure a URL: `file:///C:/caminho/para/dashboard.html`
   - Conceda as permissões necessárias

### Método 2: Servidor HTTP Local
```bash
# Com Python
python -m http.server 8000

# Com Node.js
npx http-server

# Com PHP
php -S localhost:8000
```
Depois use: `http://localhost:8000/dashboard.html`

### Método 3: Hospedagem Online
- Suba o arquivo para GitHub Pages, Netlify ou Vercel
- Use a URL pública na extensão

## 📖 Como Usar

### 🗂️ Gerenciar Dashboards

#### Criar Novo Dashboard
1. Clique em **"+ Novo Dashboard"**
2. Digite o nome desejado
3. Clique em **"Criar"**

#### Renomear Dashboard
- **Opção 1**: Clique diretamente no título
- **Opção 2**: Clique nos "⋮" → "Renomear"

#### Excluir Dashboard
1. Clique nos **"⋮"** no canto superior direito
2. Selecione **"Excluir"**
3. Confirme a ação

### 🔗 Gerenciar Sites

#### Adicionar Site
1. Clique em **"+ Adicionar Site"** em qualquer dashboard
2. Preencha as informações:
   - **Nome**: Como aparecerá no dashboard
   - **URL**: Endereço completo (com https://)
   - **Ícone**: Emoji para representar o site (opcional)
3. Clique em **"Adicionar"**

#### Excluir Site
1. **Passe o mouse** sobre o site desejado
2. Clique no **"×"** que aparece à direita
3. Confirme a exclusão

### 🔍 Pesquisar
- **Digite** na barra de pesquisa
- **Pressione Enter** para pesquisar no Google
- **Atalho**: `Ctrl+K` ou `/` para focar na barra

## ⌨️ Atalhos de Teclado

| Atalho | Função |
|--------|--------|
| `Ctrl + K` | Focar na barra de pesquisa |
| `/` | Focar na barra de pesquisa |
| `Enter` | Pesquisar no Google / Confirmar modal |
| `Escape` | Fechar modais e menus |

## 💡 Dicas e Truques

### 🎨 Personalização de Ícones
Use emojis criativos para seus sites:
- 🎥 YouTube
- 📧 Email
- 💼 Trabalho
- 🛒 Compras
- 🎮 Jogos
- 📱 Redes Sociais

### 📂 Organização Sugerida
- **Trabalho**: Gmail, LinkedIn, GitHub, Drive
- **Entretenimento**: Netflix, YouTube, Spotify, Twitch
- **Compras**: Amazon, Mercado Livre, Shopee
- **Desenvolvimento**: GitHub, Stack Overflow, MDN, VS Code
- **Notícias**: G1, UOL, Terra, BBC

### 🔄 Backup e Restauração
Seus dados ficam salvos automaticamente no navegador. Para fazer backup:

1. **Exportar** (via console do navegador):
```javascript
copy(localStorage.getItem('personalDashboards'))
```

2. **Importar** (via console do navegador):
```javascript
localStorage.setItem('personalDashboards', 'COLE_SEUS_DADOS_AQUI')
location.reload()
```

## 🔧 Solução de Problemas

### ❌ Sites não carregam
- Verifique se a URL está completa (com `https://`)
- Teste a URL em uma nova aba primeiro

### 💾 Dados perdidos
- Verifique se não limpou o cache do navegador
- Use o método de backup acima preventivamente

### 🚫 Arquivo local não funciona
- Certifique-se de conceder permissões na extensão
- Tente usar um servidor HTTP local
- Verifique se o caminho do arquivo está correto

### 📱 Problemas no mobile
- O layout se adapta automaticamente
- Toque e arraste funciona normalmente
- Use o menu hambúrguer se disponível

## 🆘 Suporte

### Problemas Comuns
1. **Extensão não funciona**: Reinstale e conceda permissões
2. **Layout quebrado**: Atualize a página (F5)
3. **Sites não abrem**: Verifique URLs e bloqueadores
4. **Performance lenta**: Limite a quantidade de sites por dashboard

### Limitações
- Funciona apenas com a extensão instalada
- Dados ficam no navegador local
- Clima é simulado (não conectado a API real)
- Máximo recomendado: 50 sites por dashboard

## 🔄 Atualizações

Para atualizar o dashboard:
1. Faça backup dos dados (método acima)
2. Substitua o arquivo HTML pela nova versão
3. Restaure os dados se necessário

## 📄 Licença

Este projeto é de código aberto. Sinta-se livre para usar, modificar e distribuir.

---

**💝 Gostou do projeto? Considere dar uma ⭐ e compartilhar com amigos!**