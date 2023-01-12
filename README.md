# react-flex-ellipsis-text

## Introduction

`react-flex-ellipsis-text` is a simple [React](https://reactjs.org/) functional component which renders a flexbox element containing text.
The text inside the element has the `text-overflow: ellipsis` CSS property applied to it, making it so that once it overflows, the text is turned into ellipsis.
This functionality does not work natively with flexbox and implements "the hack" necessary to make it function.

It also adds a tooltip title to the ellipsis text to reveal what the full text is past the ellipsis.

## Installation

To install run the following command:

```
npm install @noxy/react-flex-ellipsis-text@latest
```

Typescript types are already available in the library so no need to get external types.

## Usage

To use this library, simply import the function from the library and call it with the value you want converted to a boolean:

```typescript jsx
import {FlexEllipsisText} from "@noxy/react-flex-ellipsis-text";
import React, {HTMLProps} from "react";

function TestComponent(props: HTMLProps<HTMLDivElement>) {
  
  return (
    <FlexEllipsisText>
      Hello World
    </FlexEllipsisText>
  );
}
```

## Properties

### showTitle: boolean

Determines if the tooltip title should be shown once text overflows and becomes ellipsis.

**Default value:** true

## Styling

Any CSS property marked as !important, is important and should not be changed. Changing them can break component functionality.

The following is a list of important properties:

```css
.ellipsis-text {
  display: flex !important;
}

.ellipsis-text > span {
  min-width:     0 !important;
  text-overflow: ellipsis !important;
  white-space:   nowrap !important;
  overflow:      hidden !important;
}

```
