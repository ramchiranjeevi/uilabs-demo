import Ember from 'ember';

export default Ember.Component.extend({
  previewObj:{'is_image':false,'is_pdf':false,'is_audio':false,'is_video':false,'is_zip':false,'is_developer':false,'is_writer':false,'has_prev':true,'has_next':true,'preview_url':''},
  currentPreviewItem:{'isLoading':false},
  currentPreviewIndex:0,
  actions:{
    showpreview:function(currentItem)
    {
        var count = 0,c_previewObj = this.previewItems,currentIndex;
        var currentId = currentItem.id;
        for(var i=0; i<c_previewObj.length;i++)
        {
          if(currentId === c_previewObj[i].id)
          {
           currentIndex = count;
         }
           count ++;
        }
        if(currentIndex === 0)
        {
          this.set('previewObj.has_prev',false);
        }
        if(currentIndex > 0)
        {
          this.set('previewObj.has_prev',true);
        }
        if(currentIndex === (c_previewObj.length-1))
        {
          this.set('previewObj.has_next',false);
        }
        if(currentIndex < (c_previewObj.length-1))
        {
          this.set('previewObj.has_next',true);
        }
        if(currentIndex >=0)
        {
          this.set('can_preview',true);
          this.set('currentItem',currentItem);
          this.set('currentPreviewIndex',currentIndex);
          this.send('loadpreview',currentItem.ftype);
        }
    },
    next:function()
    {
        var c_previewObj = this.previewItems,
        currentIndex = this.get('currentPreviewIndex');

        if(currentIndex < c_previewObj.length)
        {
          currentIndex++;
        }
        if (currentIndex === 0) {
          this.set('previewObj.has_prev', false); // No I18N
        }
        if (currentIndex > 0) {
            this.set('previewObj.has_prev', true); // No I18N
          }
          if (currentIndex === (c_previewObj.length-1)) {
              this.set('previewObj.has_next', false); // No I18N
            }
            if (currentIndex < (c_previewObj.length-1)) {
                this.set('previewObj.has_next', true); // No I18N
              }
        if (currentIndex === 0) {
          this.set('previewObj.has_prev', false); // No I18N
        }
        if (currentIndex > 0) {
            this.set('previewObj.has_prev', true); // No I18N
          }
          if (currentIndex === (c_previewObj.length-1)) {
              this.set('previewObj.has_next', false); // No I18N
            }
            if (currentIndex < (c_previewObj.length-1)) {
                this.set('previewObj.has_next', true); // No I18N
              }

        var currentItem = c_previewObj[currentIndex];
        this.set('currentPreviewIndex',currentIndex);
        this.set('currentItem',currentItem);
        this.send('loadpreview',currentItem.ftype);
    },
    previous:function()
    {
      var c_previewObj = this.previewItems,
      currentIndex = this.get('currentPreviewIndex');
      if(currentIndex > 0)
      {
        currentIndex = currentIndex -1;
      }
      if (currentIndex === 0) {
        this.set('previewObj.has_prev', false); // No I18N
      }
      if (currentIndex > 0) {
          this.set('previewObj.has_prev', true); // No I18N
        }
        if (currentIndex === (c_previewObj.length-1)) {
            this.set('previewObj.has_next', false); // No I18N
          }
          if (currentIndex < (c_previewObj.length-1)) {
              this.set('previewObj.has_next', true); // No I18N
            }
      var currentItem = c_previewObj[currentIndex];
      this.set('currentPreviewIndex',currentIndex);
      this.set('currentItem',currentItem);
      this.send('loadpreview',currentItem.ftype);
    },
    loadpreview:function(ftype)
    {
     this.send('resetPreviewDataToDefault');
      if(ftype === "image")
      {
          this.set('previewObj.is_image',true);
          this.set('previewObj.preview_url','https://download.zoho.com/paramdownloadservlet?x-service=EX&x-encoding=gzip&x-mode=4&x-resource_id=2bnqs25ff2ed8cbe94b658756db6806698079&event-id=2bnqs25ff2ed8cbe94b658756db6806698079_770x515&x-w=770&x-h=515');
      }
      else if(ftype === "pdf")
      {
          this.set('previewObj.is_pdf',true);
      }
      else if(ftype === "audio")
      {
          this.set('previewObj.is_audio',true);
      }
      else if(ftype === "video")
      {
          this.set('previewObj.is_video',true);
      }
      else if(ftype === "zip")
      {
          this.set('previewObj.is_zip',true);
      }
      else if(ftype === "developer")
      {
          this.set('previewObj.is_developer',true);
      }
      else if(ftype === "writer")
      {
          this.set('previewObj.is_writer',true);
      }
    },
    resetPreviewDataToDefault:function()
    {
      this.set('previewObj.is_image',false);
      this.set('previewObj.is_pdf',false);
      this.set('previewObj.is_audio',false);
      this.set('previewObj.is_video',false);
      this.set('previewObj.is_zip',false);
      this.set('previewObj.is_developer',false);
      this.set('previewObj.is_writer',false);
    }
  }
});
