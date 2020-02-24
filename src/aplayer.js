const apFixed = new APlayer({
  element: document.getElementById('aplayer-fixed'),
  mutex: true,
  theme: '#97dffd',
  order: 'random',
  lrcType: 3,
  fixed: true,
});
$.ajax({
  url: 'https://api.i-meto.com/meting/api?server=netease&type=playlist&id=40419567',
  success: function (list) {
    apFixed.list.add(JSON.parse(list));
  }
});
