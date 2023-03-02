<template>
  <div class="checkbox">
    <label class="label" :style="temp ? 'color:#1976d2' : ''">
      <div :class="'checkBox' + (single ? ' circle' : '')">
        <input type="checkbox" v-model="temp" @click="change" ref="input" />
        <div class="transition"></div>
      </div>
      <p>{{ text }}</p>
      <input
        v-if="input"
        class="input"
        placeholder="请输入"
        @blur="string"
        v-model="tempS"
      />
    </label>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Boolean,
      default: () => false,
    },
    text: {
      type: String,
      default: () => "选项",
    },
    input: {
      type: Boolean,
      default: () => false,
    },
    info: {
      type: String,
      default: () => "",
    },
    single: {
      type: Boolean,
      default: () => false,
    },
  },
  data() {
    return {
      temp: this.value,
      tempS: this.info,
    };
  },
  methods: {
    change() {
      this.$emit("change", !this.temp);
      this.$emit("calc");
      this.$parent.saveData();
    },
    string() {
      this.$emit("string", this.tempS);
      this.$parent.saveData();
    },
    setTemp(val) {
      this.temp = val;
      this.$refs.input.checked = false;
    },
  },
  watch: {
    value(val) {
      this.temp = val;
    },
    info(val) {
      this.tempS = val;
    },
  },
};
</script>

<style scoped>
.clear {
  clear: both;
}
.checkbox {
  margin: 8px 0;
  max-width: 100%;
}
.label {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 18px;
  max-width: 100%;
}
.label p {
  margin: 0;
  flex-shrink: 0;
  max-width: 100%;
}
.checkBox {
  flex-shrink: 0;
  display: inline-block;
  cursor: pointer;
  width: 15px;
  height: 15px;
  border: 2px solid rgba(255, 255, 255, 0);
  border-radius: 3px;
  position: relative;
  overflow: hidden;
  box-shadow: 0px 0px 0px 1px #1976d2;
  margin-right: 5px;
}

.checkBox div {
  width: 30px;
  height: 30px;
  background-color: #1976d2;
  top: -26px;
  left: -26px;
  position: absolute;
  transform: rotateZ(45deg);
  z-index: 100;
}

.checkBox input[type="checkbox"]:checked + div {
  left: -5px;
  top: -5px;
}

.checkBox input[type="checkbox"] {
  position: absolute;
  left: 25px;
  visibility: hidden;
}

.transition {
  transition: 200ms ease;
}
.input {
  width: 100%;
  max-width: 320px;
  height: 30px;
  padding: 0 15px;
  border-radius: 6px;
  border: 1px solid #1976d2;
  outline: none;
  box-sizing: border-box;
  font-size: 18px;
  margin-left: 10px;
}

.input:hover {
  border: 2px solid #1976d2;
}
.circle {
  border-radius: 100px;
}
@media screen and (max-width: 720px) {
  .label {
    font-size: 16px;
  }
  .checkBox {
    width: 12px;
    height: 12px;
    border: 1px solid rgba(255, 255, 255, 0);
    border-radius: 4px;
  }
  .checkBox div {
    width: 24px;
    height: 24px;
    top: -20px;
    left: -20px;
  }
  .checkBox input[type="checkbox"]:checked + div {
    left: -4px;
    top: -4px;
  }
  .checkBox input[type="checkbox"] {
    left: 20px;
  }
  .input {
    padding: 0 5px;
    font-size: 16px;
    height: 24px;
  }
}
</style>