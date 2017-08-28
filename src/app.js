'use strict';

import './assets/scss/main.scss';
import Vue from 'vue';
import json from './data.js';

Vue.component('contact-list', {
	props: ['child'],
    template: `
			<div class="list-item">
				<input type="checkbox" :id="'item-' + child.ID" v-model="child.toggle">
				<label class="list-item__toggle" :for="'item-' + child.ID" :class="{ 'child' : (child.sub && child.sub.length) }"></label>
				<div class="list-item-content">
					<label class="list-item__name" :for="'item-' + child.ID">
						{{ child.Name }}
						<button class="list-item__delete" v-on:click="deleteItems(child)" v-if="child.parent">
							Delete
						</button>
					</label>
					<span class="list-item__phone">
						{{ child.Phone }}
					</span>
					<span class="list-item__city">
						{{ child.City }}
					</span>
					<contact-list v-for="item in child.sub" :key="item.ID" :child="item" :class="{ 'open' : child.toggle }" v-on:delete="deleteItem(item.ID)"></contact-list>
				</div>
			</div>
    `,
    methods: {
		findChild: function(arr, id) {
			let self = this;
			let result = arr.filter(item => {
				self.$set(item, 'delete', true);
				return (item.parentID === id);
			});
			return result;
		},
		list: function(arr, data) {
			let self = this;
			data.filter(item => {
				let result = [];
				self.$set(item, 'delete', true);
				if ((item.sub.length > 0)) self.list(self.arr, item.sub);
				return item;
			})
			return data;
		},
		remove: function(arr) {
			let self = this;
			for (var i = self.$root.$data.arr.length - 1; i >= 0; i--) {
				if (arr.indexOf(i) > -1) self.$delete(self.$root.$data.arr, i);
			}
		},
      deleteItems: function (item) {
		let self = this;
		let index = this.$root.$data.arr.indexOf(item);

		if ((typeof item.parentID === 'undefined') || (item.parentID === 0)) {
			let result = self.list(self.arr, item.sub);

			let removed = [];
			self.$root.$data.arr.map((el, idx) => {
				if (el.delete) removed = removed.concat(idx);
			})

			self.remove(removed);
			self.$delete(self.$root.$data.arr, index);
		}
      }
    },
})

let contact = new json({
	el: '#list',
	data: {},
	created() {
		let self = this;
		self.getList();
	},
	methods: {
		readed: function(data) {
			let result = data.filter(item => {
				return !item.readed;
			});
			return result;
		},
		setRead: function(id) {
			let self = this;

			let result = self.arr.map(item => {
				if (item.ID === id) self.$set(item, 'readed', true);
				return item;
			})

			return result;
		},
		findChild: function(arr, id) {
			let self = this;
			let result = arr.filter(item => {
				if (item.parentID === id) self.setRead(item.ID);
				return (item.parentID === id);
			});
			return result;
		},
		list: function(arr, data) {
			let self = this;
			data.filter(item => {
				let left = self.readed(arr);
				let result = [];
				if (left.length > 0) result = self.findChild(left, item.ID);
				self.$set(item, 'sub', result);
				self.$set(item, 'toggle', true);
				self.setRead(item.ID);

				left = self.readed(arr);
				if ((item.sub.length > 0) && (left.length > 0)) self.list(left, item.sub);
				self.sort(item.sub);
				return item;
			})
			return data;
		},
		findParent: function () {
			let self = this;
			let parent = self.arr.filter(item => {
				if ((typeof item.parentID === 'undefined') || (item.parentID === 0)) {
					self.setRead(item.ID);
					self.$set(item, 'parent', true);
					return item;
				};
			});
			self.sort(parent);
			return parent;
		},
		getList: function () {
			let self = this;
			return self.list(self.arr, self.findParent());
		},
		sort: function(arr) {
			arr.sort(function(a, b) {
				var nameA = a.Name.toLowerCase();
				var nameB = b.Name.toLowerCase();
				if (nameA < nameB) {
					return -1;
				}
				if (nameA > nameB) {
					return 1;
				}
				return 0;
			});
		}
	},
	filters: {

	}
});
