class Datum < ActiveRecord::Base
    has_attached_file :audio
    has_attached_file :video
    has_attached_file :gesture

    #どのMIME形式を許可するか、ないとエラーになる
    validates_attachment_content_type :audio, content_type: { content_type: ["audio/mpeg", "audio/x-wav"] }
end
