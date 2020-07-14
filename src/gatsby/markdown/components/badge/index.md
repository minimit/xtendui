---
type: "Components"
badge: "Extensions"
parent: "Badge"
title: "Badge"
description: "Badge component for showing very short messages."
categories: ["400-Extensions"]
---

## Setup

To use this component import the **less** files accordingly:

```less
@import '/src/core/badge/badge.less';
```

Or just import **core**:

```less
@import '/src/xtend-core.less';
```

[[noteDefault]]
| To modify a **less** or **js** file add [webpack resolve](/introduction/setup#usage-webpack) and fork the file copying it in your project.

## Usage

Use this markup to create a **badge**.

<script type="text/plain" class="language-markup">
  <div class="badge-container">
  
      <div class="badge badge-default">
        <!-- content -->
      </div>
      
      <div class="badge badge-default">
        <!-- content -->
      </div>
      
  </div>
</script>