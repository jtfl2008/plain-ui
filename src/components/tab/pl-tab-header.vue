<template>
    <div class="pl-tab-header">
        <pl-list class="pl-tab-header-wrapper" direction="top" draggable :drag-list="data" @switch="pl_switch">
            <pl-item v-if="!data || data.length === 0" class="pl-item-exclude pl-tab-header-item pl-tab-header-item-active" key="no-item">
                <span>无</span>
            </pl-item>
            <pl-item
                    class="pl-tab-header-item"
                    v-for="(item,index) in data"
                    :key="item[valueKey]"
                    :class="{'pl-tab-header-item-active':index === p_value}"
                    @click.native="p_click(item,index)"
                    @dblclick.native="p_dblclick(item,index)"
                    @contextmenu.native.stop.prevent="e=>pl_contextmenu(e,item,index)">
                <pl-tooltip :content="item[labelKey]" show-overflow-tooltip/>
                <div class="pl-tab-header-item-close" @click.stop="p_close(item,index)" v-if="clearIcon">
                    <pl-icon icon="pad-close-circle-fill" hover/>
                </div>
            </pl-item>
        </pl-list>
        <div class="pl-tab-header-bottom">
            <div class="pl-tab-header-bottom-tag" :style="tagStyles"></div>
        </div>
    </div>
</template>

<script>
    import {ValueMixin} from "../../mixin/component-mixin";
    import PlIcon from "../pl-icon";
    import PlList from "../list/pl-list";
    import PlItem from "../list/pl-item";
    import PlTooltip from "../tooltip/pl-tooltip";

    export default {
        name: "pl-tab-header",
        components: {PlTooltip, PlItem, PlList, PlIcon,},
        mixins: [ValueMixin],
        props: {
            value: {type: Number, default: 0},
            data: {type: Array, default: () => []},
            clearIcon: {type: Boolean,},
            valueKey: {type: String, require: true},
            labelKey: {type: String, require: true},
        },
        data() {
            return {
                tagWidth: null,
                tagLeft: null,
            }
        },
        computed: {
            tagStyles() {
                return {
                    left: `${(this.p_value == null || this.p_value < 0 ? 0 : this.p_value) * 150}px`
                }
            },
        },
        methods: {
            p_click(item, index) {
                this.p_value = index
                this.p_emitValue()
                this.$emit('click', {item, index})
            },
            p_close(item, index) {
                this.$emit('close', {item, index})
            },
            p_dblclick(item, index) {
                this.$emit('dblclick', {item, index})
            },
            pl_contextmenu(e, item, index) {
                let el = e.target
                while (!!el.parentNode && !this.$plain.$dom.hasClass(el, 'pl-tab-header-item')) {
                    el = el.parentNode
                }
                this.$emit('contextmenu', {e, item, index, el})
            },
            pl_switch(data) {
                // console.log({...data}, this.data)
                let index;
                data.originIndex === this.p_value && (index = data.targetIndex)
                data.targetIndex === this.p_value && (index = data.originIndex)
                if (index != null) {
                    this.p_click(this.data[index], index)
                }
            },
        },
    }
</script>

<style lang="scss">
    @include themeWrap {

    }
</style>
