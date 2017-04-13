File.open("script/outputs/audio_paths.txt", "w") do |f|
  Datum.all.each do |d|
    f.puts d.audio.path
  end
end
