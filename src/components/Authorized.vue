<script>
import { check } from "../utils/auth";
export default {
  functional: true,
  render(h, context) {
    console.log("role", check(context.props.role), context.props.role, context);
    return check(context.props.role) ? context.scopedSlots.default() : null;
  }
};
</script>

<style></style>
