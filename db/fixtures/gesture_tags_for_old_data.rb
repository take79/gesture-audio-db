Datum.all.each do |datum|
  if GestureTag.exists?(datum_id: datum.id)
  else
    datum.build_gesture_tag.save
  end
end
