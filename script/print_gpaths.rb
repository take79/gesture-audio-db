File.open("script/outputs/gesture_paths.txt", "w") do |f|
  Datum.all.each do |d|
    f.puts d.gesture.path
  end
end
