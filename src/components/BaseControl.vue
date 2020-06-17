<template>
  <div class="control">
    <div class="control-header">{{controlLabel}}</div>
    <div class="control-body">
      <slot name="body"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "BaseControl",
  props: {
    controlLabel: String
  }
};
</script>

<style>
.control {
  padding: 4px 10px 10px 10px;
  flex-direction: column;
  align-items: flex-start;
}

.control-header {
  padding-bottom: 4px;
  justify-content: center;
  font-weight: bold;
  color: white;
}
</style>
