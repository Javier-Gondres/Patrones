# Diagramas UML (Mermaid) — patrones del proyecto

Cada bloque es un `classDiagram` que puedes pegar en GitHub, Notion o en un visor Mermaid.

---

## Singleton (`Singleton/`)

```mermaid
classDiagram
  class DatabaseConnection {
    -_connected : boolean
    +getInstance()$ DatabaseConnection
    +connect()
    +query(sql : string)
  }
  note for DatabaseConnection "Una sola instancia vía getInstance();\nel constructor no se usa directamente."
```

---

## Decorator (`Decorator/`)

```mermaid
classDiagram
  class Cafe {
    <<abstract>>
    +getCosto() number
    +getDescripcion() string
  }
  class CafeSimple {
    +getCosto() number
    +getDescripcion() string
  }
  class DecoradorCafe {
    #cafe : Cafe
    +getCosto() number
    +getDescripcion() string
  }
  class Leche
  class Azucar
  class Chocolate

  Cafe <|-- CafeSimple
  Cafe <|-- DecoradorCafe
  DecoradorCafe <|-- Leche
  DecoradorCafe <|-- Azucar
  DecoradorCafe <|-- Chocolate
  DecoradorCafe o-- Cafe : envuelve
```

---

## Command (`Command/`)

```mermaid
classDiagram
  class Command {
    <<abstract>>
    +execute()
    +undo()
  }
  class TurnOnCommand {
    -lamp : Lamp
    +execute()
    +undo()
  }
  class TurnOffCommand {
    -lamp : Lamp
    +execute()
    +undo()
  }
  class RemoteControl {
    -_slot : Command
    -_history : Command[]
    +setCommand(command)
    +pressButton()
    +pressUndo()
  }
  class Lamp {
    +name : string
    +turnOn()
    +turnOff()
    +isOn() boolean
  }

  Command <|-- TurnOnCommand
  Command <|-- TurnOffCommand
  TurnOnCommand --> Lamp
  TurnOffCommand --> Lamp
  RemoteControl o-- Command : slot / historial
```

---

## Interpreter (`Interpreter/`)

```mermaid
classDiagram
  class Expression {
    <<abstract>>
    +interpret() number
  }
  class NumberExpr {
    +value : number
    +interpret() number
  }
  class AddExpr {
    +left : Expression
    +right : Expression
    +interpret() number
  }
  class SubtractExpr {
    +left : Expression
    +right : Expression
    +interpret() number
  }

  Expression <|-- NumberExpr
  Expression <|-- AddExpr
  Expression <|-- SubtractExpr
  AddExpr o-- Expression : left, right
  SubtractExpr o-- Expression : left, right

  note for Expression "parser.js: parseExpression(str)\nconstruye el árbol y luego interpret()."
```

---

## Iterator (`Iterator/`)

```mermaid
classDiagram
  class Playlist {
    -_songs : string[]
    +addSong(title)
    +createIterator() PlaylistIterator
    +length : number
  }
  class PlaylistIterator {
    -_songs : string[]
    -_index : number
    +hasNext() boolean
    +next() string
  }

  Playlist ..> PlaylistIterator : crea
```

---

## Mediator (`Mediator/`)

```mermaid
classDiagram
  class ChatMediator {
    +users : User[]
    +addUser(user)
    +sendMessage(message, sender)
  }
  class User {
    +name : string
    -mediator : ChatMediator
    +send(message)
    +receive(message, senderName)
  }

  ChatMediator o-- "*" User : registra
  User --> ChatMediator : delega envío
```

---

## Memento (`Memento/`)

```mermaid
classDiagram
  class EditorMemento {
    -_text : string
    -_cursor : number
    +getText() string
    +getCursor() number
  }
  class TextEditor {
    -_text : string
    -_cursor : number
    +write(chunk)
    +save() EditorMemento
    +restore(memento)
    +getState()
  }
  class History {
    -_stack : EditorMemento[]
    +push(memento)
    +pop() EditorMemento
    +isEmpty() boolean
  }

  TextEditor ..> EditorMemento : crea en save()
  TextEditor ..> EditorMemento : usa en restore()
  History o-- "*" EditorMemento : guarda snapshots
```

---
