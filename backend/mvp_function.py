import nn

def mvp_function(file_path):
    return nn.predict(file_path)

print(mvp_function("plots\LJ001-0001_gen.wav"))