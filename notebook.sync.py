# %%
import numpy as np
import pandas as pd
import helper.nbhelper


# %%
d = (np.random.randn(100, 3) * 100).astype(int)
df = pd.DataFrame(data=d, columns=["a", "b", "c"])
g = df.s()
g

# %%
