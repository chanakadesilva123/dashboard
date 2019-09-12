<template>
  <footer class="main-footer" style="margin-left:0;background-color:#282b30 !important">
    <strong>
      Copyright &copy; {{ year }}
      <a href="javascript:;">OneSysConsulting</a>.
    </strong> All rights reserved.
  </footer>
</template>

<script>
export default {
  name: 'DashFooter',
  data: function() {
    return {
      year: new Date().getFullYear()
    };
  }
};
</script>
