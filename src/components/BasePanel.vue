<template>
  <div class="panel">
    <div class="panel-header">{{ panelLabel }}</div>
    <div class="panel-body">
      <slot name="body"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "BasePanel",
  props: {
    panelLabel: String
  }
};
</script>

<style>
.panel {
  justify-content: center;
  flex-direction: column;
  margin: 4px;
  border-color: #5a5a5a;
  border-width: 4px;
  border-style: solid;
}

.panel-header {
  font-size: 18px;
  background-color: #a5a5a5;
  padding: 4px;
  padding-left: 16px;
  font-weight: bold;
  color: #5a5a5a;
}

.panel-body {
  justify-content: flex-start;
  background-color: #878787;
  padding-left: 24px;
}
</style>
