class Datum < ActiveRecord::Base
  belongs_to :actor
  belongs_to :topic
  has_one :gesture_tag
  accepts_nested_attributes_for :gesture_tag
  has_attached_file :audio, url: "/assets/audios/:id/:basename.:extension", path: "#{Rails.root}/public/assets/audios/:id/:basename.:extension"
  has_attached_file :video, url: "/assets/videos/:id/:basename.:extension", path: "#{Rails.root}/public/assets/videos/:id/:basename.:extension",
  :styles => {
      :medium => { :geometry => "640x480", :format => 'mp4' },
      :thumb => { :geometry => "100x100", :format => 'jpg', :time => 10 }
  }, :processors => [:transcoder]
  has_attached_file :gesture, url: "/assets/gestures/:id/:basename.bvh", path: "#{Rails.root}/public/assets/gestures/:id/:basename.bvh"

  #どのMIME形式を許可するか、ないとエラーになる
  validates_attachment_content_type :audio, content_type: ["audio/mpeg", "audio/x-wav"]
  validates_attachment_content_type :video, content_type: ["video/x-msvideo", "video/mp4"]
  validates_attachment_file_name :gesture, matches: [/bvh\z/]
end
