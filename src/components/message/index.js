import PlMessageContainer from './pl-message-container'

class MessageService {
    _el;
    $plain;
    containers = {}

    defaultOption = {
        id: null,
        horizontal: 'center',
        vertical: 'start',
        type: 'black',
        time: 3000,
        done: null,
        click: null,
        icon: null,
    }

    get el() {
        if (!this._el) {
            this._el = document.createElement('div')
            this.$plain.$dom.addClass(this._el, 'pl-message-containers')
            document.body.appendChild(this._el)
        }
        return this._el
    }

    constructor($plain) {
        this.$plain = $plain
    }

    newInstance(horizontal, vertical) {
        const instance = this.$plain.newInstance(PlMessageContainer)
        instance.p_horizontal = horizontal
        instance.p_vertical = vertical
        this.el.appendChild(instance.$el)
        return instance
    }

    close(messageOption) {
        this.containers[`${messageOption.horizontal}-${messageOption.vertical}`].remove(messageOption)
    }

    /**
     * 显示提示消息
     * @author  韦胜健
     * @date    2018/12/24 09:58
     */
    show(message, option) {
        option = option || {}
        switch (this.$plain.$utils.typeOf(message)) {
            case 'string':
                option.message = message
                break
            case 'object':
                option = message
                break;
        }
        option = Object.assign({}, this.defaultOption, option)
        option.id = option.id || this.$plain.$utils.uuid()

        const position = `${option.horizontal}-${option.vertical}`
        const container = this.containers[position] || this.newInstance(option.horizontal, option.vertical)
        if (!this.containers[position]) this.containers[position] = container

        this.$plain.Vue.prototype.$nextTick(() => container.add(option))
        return option
    }
}

export {
    MessageService
}