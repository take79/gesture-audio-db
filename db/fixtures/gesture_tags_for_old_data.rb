Data.all.each do |datum|
  if gesture_tag.exists?(datum_id: datum.id)
  else
    datum.build_gesture_tag
  end
end
