class Datum < ActiveRecord::Base
    has_attached_file :audio
    has_attached_file :video
    has_attached_file :gesture

    #どのMIME形式を許可するか、ないとエラーになる
    validates_attachments
end
