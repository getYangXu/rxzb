Component({
  properties: {
    show: {
      type: Boolean,
      value: false
    }
  },
  data: {
    filterItems: [
      { text: '全部', value: 'all' },
      { text: '美食', value: 'food' },
      { text: '景点', value: 'scenic' },
      { text: '娱乐', value: 'entertainment' },
      { text: '住宿', value: 'hotel' }
    ]
  },
  methods: {
    onFilterItemClick(e) {
      const { value } = e.currentTarget.dataset;
      this.triggerEvent('filter', { value });
    }
  }
});
