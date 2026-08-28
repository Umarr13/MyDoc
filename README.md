# MyDoc

*An open-source, chat-driven AI assistant for intelligent file organization, contextual retrieval, and workflow automation.*

[![Build and Release Android APK](https://github.com/Umarr13/MyDoc/actions/workflows/build-apk.yml/badge.svg)](https://github.com/Umarr13/MyDoc/actions)

## Overview
**MyDoc** manages the "digital life" of a user by prioritizing semantic understanding and intent over rigid folder structures. Whether searching for a lost invoice or archiving old project files, users can simply describe their goal in natural language. MyDoc leverages local or cloud LLMs to interpret instructions, formulate an action plan, and—with explicitly logged permissions—orchestrate filesystem modifications.

### Core Principles
- **Intent, not extensions:** Classification and indexing are driven by context and semantics rather than simple file types.
- **Conversational interface:** MyDoc is interacted with via a terminal-style natural language interface, eliminating repetitive GUI click-trees.
- **Provider-agnostic AI:** Bring your own OpenAI/Anthropic keys, or run entirely offline using local LLMs.
- **Local-first by default:** File watching, embedding, semantic querying, and SQLite state tracking happen securely on-device.
- **Reversible automation:** Every automated file operation defaults to a dry-run preview and is tracked via an action logger to ensure user trust.

## Technology Stack

The project utilizes a distinct **Client-Server architecture**, isolating the front-end view layer from the heavy backend AI engine.

### Frontend (Client)
- **Framework:** React + Vite
- **Styling:** Tailwind CSS (v3) + Headless UI patterns
- **Mobile Container:** Capacitor JS for building native Android APKs
- **Packaging:** CI/CD via GitHub Actions for automated APK building

### Backend (Intelligence Engine - In Progress)
- **Language:** Python 3.12+ (Async I/O optimized)
- **LLM Orchestration:** Direct provider SDKs with a custom adapter layer (OpenAI, Anthropic, Ollama)
- **Vector DB:** Embedded ChromaDB
- **Embeddings:** `sentence-transformers` (Offline-first approach)
- **Database (App State & Undo History):** SQLite via SQLModel
- **Configuration:** Pydantic v2 + `pydantic-settings`
- **File System Monitoring:** Rust-backed `watchfiles`

## Architecture at a Glance

```
┌─────────────────────────────────────────────┐
│                 Client UI                    │
│     (React/Capacitor Terminal Interface)     │
└───────────────────┬───────────────────────────┘
                     │ REST / WebSocket
              ┌──────▼──────┐
              │  Intent      │   classifies: search / organize /
              │  Router      │   automate / query / undo
              └──────┬──────┘
        ┌────────────┼────────────────┐
        ▼            ▼                ▼
┌───────────────┐ ┌────────────┐ ┌───────────────┐
│ Semantic Index │ │ Rule Engine │ │ Action Logger │
│ (ChromaDB +    │ │ (file ops,  │ │ (SQLite,      │
│  embeddings)   │ │  dry-run    │ │  undo stack)  │
└───────┬────────┘ │  by default)│ └───────────────┘
        │           └─────┬──────┘
        ▼                 ▼
┌────────────────────────────────┐
│      File System (watched)      │
└────────────────────────────────┘
```

## Getting Started (Development)

### Web Frontend
1. Ensure you have Node.js 22+ installed.
2. Clone the repository and install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```

### Android APK Build
To sync Capacitor with the latest Web build and run Android Studio:
```bash
npm run build
npx cap sync android
npx cap open android
```
The APK is also automatically compiled and published as a GitHub Release whenever a new `v*` tag is pushed.

## Licensing
This project is licensed under the MIT License.
