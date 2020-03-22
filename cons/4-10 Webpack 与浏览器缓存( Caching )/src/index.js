import _ from 'lodash'
import $ from 'jquery'

const dom = $('<div>')
dom.html(_.join(['hello','word2']),'-')
$('body').append()