<script>
import { check } from "../utils/checkUiPermission";
export default {
  functional: true,
  render(h, context) {
    // console.log("role", check(context.props.permission), context.props.permission, context);
    return check(context.props.permission) ? context.scopedSlots.default() : null;
  }
};
</script>
