<template>
    <div class="pl-base-table-cell" :style="styles" :class="classes">
        <template v-if="isFixed">
            <div class="pl-base-table-cell-content">
                <keep-alive>
                    <pl-base-table-cell-watcher key="head"
                                                v-if="!data"
                                                :data="p_data"
                                                :text="col.title"
                                                no-use-formatter

                                                :tooltip="true"
                                                :scope-slot-func="defaultScopedSlots"
                                                :render-func="defaultRenderFunc"/>
                    <pl-base-table-cell-watcher key="normal"
                                                v-else-if="!p_editable"
                                                :data="p_data"
                                                :text="showRow[col.field]"

                                                :tooltip="col.tooltip"
                                                :show-in-dialog="col.showInDialog"
                                                :link="col.link"
                                                :scope-slot-func="defaultScopedSlots"
                                                :render-func="defaultRenderFunc"
                                                :click="col.click"/>
                    <pl-base-table-cell-watcher key="edit"
                                                v-else
                                                :data="p_data"
                                                :text="showRow[col.field]"
                                                :required="p_required"

                                                :scope-slot-func="editScopedSlots"
                                                :render-func="editRenderFunc"/>
                </keep-alive>
            </div>
            <div class="pl-base-table-cell-content-slot">
                <slot></slot>
            </div>
        </template>
        <!--没有下面这个span，会导致在使用左右固定列的时候，空白内容导致td有个去不掉的padding-->
        <span v-else>&nbsp;</span>
    </div>
</template>

<script>
    import PlScopeSlot from "../render/pl-scope-slot";
    import {TableMixin} from "./index";
    import PlRenderFunc from "../render/pl-render-func";
    import PlBaseTableCellWatcher from "./pl-base-table-cell-watcher";

    export default {
        name: "pl-base-table-cell",
        components: {PlBaseTableCellWatcher, PlRenderFunc, PlScopeSlot},
        mixins: [TableMixin],
        props: {
            width: {},                              //单元格宽度
            height: {},                             //单元格高度
            isFixed: {default: false},              //是否为对应fixed table的cell
            col: {},
            defaultScopedSlots: {type: Function},   //作用域插槽：正常
            defaultRenderFunc: {type: Function},    //渲染函数：正常

            data: {},
            index: {},
            colIndex: {},
            editScopedSlots: {type: Function},      //作用域插槽：编辑
            editRenderFunc: {type: Function},       //渲染函数：编辑
        },
        computed: {
            styles() {
                const styles = {
                    height: this.$plain.$utils.unit(this.height),
                    width: this.$plain.$utils.unit(this.width),
                }
                return styles
            },
            classes() {
                return [
                    `pl-base-table-cell-align-${this.col.align}`
                ]
            },
            p_editable() {
                if (!this.data) return false
                if (!this.col.editable) return false
                return this.data.editable && (!this.col.editableFunc ? true : this.col.editableFunc(this.data))
            },
            p_required() {
                if (!this.data && !this.p_editable) return false
                if (!!this.col.requiredFunc) return this.col.requiredFunc(this.data)
                else return this.col.required
            },
            showRow() {
                if (!this.data) return {}
                return this.data.editable ? this.data.editRow : this.data.row
            },
            p_data() {
                /*col里面的editable表示列是否可编辑*/
                /*data中的editable表示当前行是否处于编辑状态*/
                return {
                    ...(this.data || {}),
                    col: this.col,
                    colIndex: this.colIndex,
                    showRow: this.showRow,
                    rowIndex: this.index,
                    prop: this.col.prop,
                }
            },

        },
    }
</script>

<style lang="scss">
</style>
